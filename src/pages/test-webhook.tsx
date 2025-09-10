import React, { useState } from 'react'
import { Box, Button, Typography, Alert, Paper } from '@mui/material'

export default function TestWebhook() {
  const [testing, setTesting] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    webhookUrl?: string
    error?: string
  } | null>(null)

  const testWebhook = async () => {
    setTesting(true)
    setResult(null)

    try {
      const response = await fetch('/api/test-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to test webhook',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setTesting(false)
    }
  }

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        🧪 Webhook Tester
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 3 }}>
        Use this page to test your Slack webhook configuration.
      </Typography>

      <Button 
        variant="contained" 
        onClick={testWebhook}
        disabled={testing}
        size="large"
        sx={{ mb: 3 }}
      >
        {testing ? 'Testing...' : 'Test Slack Webhook'}
      </Button>

      {result && (
        <Paper sx={{ p: 2 }}>
          <Alert 
            severity={result.success ? 'success' : 'error'} 
            sx={{ mb: 2 }}
          >
            {result.message}
          </Alert>

          {result.webhookUrl && (
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Webhook URL:</strong> {result.webhookUrl}
            </Typography>
          )}

          {result.error && (
            <Typography variant="body2" color="error">
              <strong>Error Details:</strong> {result.error}
            </Typography>
          )}

          {result.success && (
            <Typography variant="body2" color="success.main">
              ✅ Check your Slack channel for the test message!
            </Typography>
          )}
        </Paper>
      )}

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          📋 Troubleshooting Steps:
        </Typography>
        <Typography variant="body2" component="div">
          <ol>
            <li>Ensure SLACK_WEBHOOK_URL environment variable is set</li>
            <li>Verify the webhook URL is valid and not expired</li>
            <li>Check that the Slack app has permission to post to the channel</li>
            <li>Make sure the webhook wasn't regenerated in Slack settings</li>
          </ol>
        </Typography>
      </Box>
    </Box>
  )
}