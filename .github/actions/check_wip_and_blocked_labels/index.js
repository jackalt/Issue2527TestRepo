const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    const github_token = core.getInput("github-token");

    const octokit = new github.GitHub(github_token);
    
    octokit.checks.create({
        name: 'No WIP and Blocked labels',
        owner: context.repo.owner,
        repo: context.repo.repo,
        head_sha: context.pull_request.head.sha,
        status: 'completed',
        conclusion: conclusion
    });
}

try {
    run();
} catch (error) {
    core.setFailed(error.message);
}
