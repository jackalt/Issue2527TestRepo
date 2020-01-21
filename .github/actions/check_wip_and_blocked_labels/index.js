const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    // almost like tuple unpacking lol
    const [repo_owner, repo_name] = process.env.GITHUB_REPOSITORY.split("/");
    const github_sha = process.env.GITHUB_SHA;
    const github_token = core.getInput("github-token");

    const octokit = new github.GitHub(github_token);
    
    octokit.checks.create({
        name: 'No WIP and Blocked labels',
        owner: repo_owner,
        repo: repo_name,
        head_sha: github_sha,
        status: 'completed',
        conclusion: conclusion
    });
}

try {
    run();
} catch (error) {
    core.setFailed(error.message);
}
