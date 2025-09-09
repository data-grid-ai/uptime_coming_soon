import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

type DriverFormData = {
  name: string
  state: string
  email: string
  phone: string
  cdlType: string
  userType: 'driver'
}

type FleetManagerFormData = {
  name: string
  state: string
  email: string
  phone: string
  companyName: string
  fleetSize: string
  userType: 'fleet'
}

type FormData = DriverFormData | FleetManagerFormData

type ApiResponse = {
  success: boolean
  message: string
  id?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const formData: FormData = req.body

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.userType) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, phone, and user type are required' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      })
    }

    let submission: any

    if (formData.userType === 'driver') {
      // Validate driver-specific fields
      const driverData = formData as DriverFormData
      if (!driverData.cdlType) {
        return res.status(400).json({ 
          success: false, 
          message: 'CDL type is required for drivers' 
        })
      }

      // Save driver data to dedicated driver table
      submission = await prisma.driverSubmission.create({
        data: {
          name: driverData.name,
          state: driverData.state || 'Alabama',
          email: driverData.email,
          phone: driverData.phone,
          cdlType: driverData.cdlType,
        },
      })
      
    } else if (formData.userType === 'fleet') {
      // Validate fleet manager-specific fields
      const fleetData = formData as FleetManagerFormData
      if (!fleetData.companyName || !fleetData.fleetSize) {
        return res.status(400).json({ 
          success: false, 
          message: 'Company name and fleet size are required for fleet managers' 
        })
      }

      // Save fleet manager data to dedicated fleet manager table
      submission = await prisma.fleetManagerSubmission.create({
        data: {
          name: fleetData.name,
          state: fleetData.state || 'Alabama',
          email: fleetData.email,
          phone: fleetData.phone,
          companyName: fleetData.companyName,
          fleetSize: fleetData.fleetSize,
        },
      })
    } else {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid user type' 
      })
    }

    // Send Slack notification
    await sendSlackNotification({
      ...formData,
      submissionId: submission.id,
    })

    res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully',
      id: submission.id
    })

  } catch (error) {
    console.error('Form submission error:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    })
  }
}

async function sendSlackNotification(data: FormData & { submissionId: string }) {
  try {
    const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'
    
    const userTypeText = data.userType === 'driver' ? 'Driver' : 'Fleet Manager'
    const emoji = data.userType === 'driver' ? '🚛' : '🏢'
    
    // Create the basic fields that apply to both types
    let fields = [
      {
        "type": "mrkdwn",
        "text": `*Submission ID:*\n${data.submissionId}`
      },
      {
        "type": "mrkdwn",
        "text": `*User Type:*\n${emoji} ${userTypeText}`
      },
      {
        "type": "mrkdwn",
        "text": `*Name:*\n${data.name}`
      },
      {
        "type": "mrkdwn",
        "text": `*Email:*\n${data.email}`
      },
      {
        "type": "mrkdwn",
        "text": `*Phone:*\n${data.phone}`
      },
      {
        "type": "mrkdwn",
        "text": `*State:*\n${data.state}`
      }
    ]

    // Add type-specific fields
    if (data.userType === 'driver') {
      const driverData = data as DriverFormData & { submissionId: string }
      fields.push({
        "type": "mrkdwn",
        "text": `*CDL Type:*\nClass ${driverData.cdlType}`
      })
    } else if (data.userType === 'fleet') {
      const fleetData = data as FleetManagerFormData & { submissionId: string }
      fields.push(
        {
          "type": "mrkdwn",
          "text": `*Company Name:*\n${fleetData.companyName}`
        },
        {
          "type": "mrkdwn",
          "text": `*Fleet Size:*\n${fleetData.fleetSize}`
        }
      )
    }

    const message = {
      "text": `New ${userTypeText} Waitlist Submission`,
      "blocks": [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": `🎉 New ${userTypeText} Waitlist Submission`,
            "emoji": true
          }
        },
        {
          "type": "section",
          "fields": fields
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": `📅 *Submitted:* ${new Date().toLocaleString('en-US', { 
                timeZone: 'America/New_York',
                year: 'numeric',
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}`
            }
          ]
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": data.userType === 'driver' 
              ? `👤 *Driver Profile Summary:*\n• Looking for Class ${(data as DriverFormData).cdlType} opportunities\n• Based in ${data.state}\n• Contact: ${data.phone}\n• Ready to connect with fleet managers`
              : `🏢 *Fleet Manager Profile Summary:*\n• Company: ${(data as FleetManagerFormData).companyName}\n• Fleet size: ${(data as FleetManagerFormData).fleetSize}\n• Operating in ${data.state}\n• Contact: ${data.phone}\n• Looking to hire qualified drivers`
          }
        }
      ]
    }

    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })

    if (!response.ok) {
      throw new Error(`Slack webhook failed: ${response.status} ${response.statusText}`)
    }

    console.log('Slack notification sent successfully')
  } catch (error) {
    console.error('Slack notification error:', error)
    // Don't throw error - we don't want to fail the form submission if Slack fails
  }
}