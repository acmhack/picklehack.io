import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const octokit = new Octokit({ auth: '900d98da2d47e6b264950f9e45b79d4db6d27b77'});

function emailValid(email) {
    return -1 !== email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

$('.input .subscribe').click(async () => {
    const email = $('.input input').val();

    if(emailValid(email)) {
        await octokit
    }
});