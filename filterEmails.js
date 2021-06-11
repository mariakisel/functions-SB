const emails = [
    '12345@gmail.com',
    'twtwtwtw@gmail.com',
    'eeppep@gmail.com',
    'tryryry@gmail.com'
];
const blackListEmails=[
    'twtwtwtw@gmail.com',
    'eeppep@gmail.com'
];

function filterEmails(emails,blackListEmails){
    let filteredEmails = [];

    for (const email of emails) {
        let isWhiteListEmail = !blackListEmails.includes(email);

        if (isWhiteListEmail){
            filteredEmails.push(email);
        }
    }

    console.log(filteredEmails);
}

filterEmails(emails, blackListEmails);

