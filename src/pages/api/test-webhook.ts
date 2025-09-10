import type { NextApiRequest, NextApiResponse } from 'next'

type TestResponse = {
  success: boolean
  message: string
  webhookUrl?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TestResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
    
    if (!SLACK_WEBHOOK_URL) {
      return res.status(500).json({ 
        success: false, 
        message: 'SLACK_WEBHOOK_URL environment variable is not set'
      })
    }

    // Test message for webhook
    const testMessage = {
      "text": "🧪 Test Message from Webhook Debugger",
      "blocks": [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "🧪 Webhook Test",
            "emoji": true
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `*Test Time:* ${new Date().toLocaleString('en-US', { 
              timeZone: 'America/New_York',
              year: 'numeric',
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}`
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "✅ If you see this message, your webhook is working correctly!"
          }
        }
      ]
    }

    console.log('Testing webhook URL:', SLACK_WEBHOOK_URL.substring(0, 50) + '...')
    
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testMessage),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Webhook test failed:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      })
      
      return res.status(200).json({
        success: false,
        message: `Webhook test failed: ${response.status} - ${errorText}`,
        webhookUrl: SLACK_WEBHOOK_URL.substring(0, 50) + '...',
        error: errorText
      })
    }

    console.log('Webhook test successful')
    
    return res.status(200).json({
      success: true,
      message: 'Webhook test successful! Check your Slack channel for the test message.',
      webhookUrl: SLACK_WEBHOOK_URL.substring(0, 50) + '...'
    })

  } catch (error) {
    console.error('Webhook test error:', error)
    return res.status(500).json({
      success: false,
      message: 'Webhook test failed due to network or server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}