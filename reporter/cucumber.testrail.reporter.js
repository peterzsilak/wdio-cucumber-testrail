import WDIOReporter from '@wdio/reporter'

export default class CucumberTestrailReporter extends WDIOReporter {
    constructor(options) {
        /*
         * make reporter to write to the output stream by default
         */
        options = Object.assign(options, { stdout: true })
        super(options)
    }

    onTestFail(testStats) {
        this.write(`Congratulations! Your test "${test.title}" failed 👏`)
    }

    onTestPass(test) {
        this.write(`Congratulations! Your test "${test.title}" passed 👏`)
    }
}