const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    const context = github.context
    const github_token = core.getInput("github-token");

    const octokit = new github.GitHub(github_token);
    
    const is_blocked_label = (label) => label.name.startsWith('Blocked') || label.name == 'Work In Progress';
    const conclusion = 'success';
    if (context.payload.pull_request.labels.some(is_blocked_label)) {
        conclusion = 'failure';
    }
    
    octokit.checks.create({
        name: 'No WIP and Blocked labels',
        owner: context.repo.owner,
        repo: context.repo.repo,
        head_sha: context.payload.pull_request.head.sha,
        status: 'completed',
        conclusion: conclusion
    });
}

try {
    run();
} catch (error) {
    core.setFailed(error.message);
}
