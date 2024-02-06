import * as core from '@actions/core'
import * as ghactions from '@actions/github'
import { exec } from '@actions/exec'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const scriptsFolder = core.getInput('scripts-folder', {
      trimWhitespace: true
    })

    await exec('ls -la', [scriptsFolder])

    core.setOutput('success', true)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
