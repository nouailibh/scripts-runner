import * as core from '@actions/core'
import * as ghactions from '@actions/github'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const scriptsFolder = core.getInput('scripts-folder', {
      trimWhitespace: true
    })

    console.log('this should run.....')
    console.log(scriptsFolder)
    console.log(`Scripts are located in -> /${scriptsFolder}`)

    JSON.stringify(ghactions.context.payload, null, 2)

    core.setOutput('success', true)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
