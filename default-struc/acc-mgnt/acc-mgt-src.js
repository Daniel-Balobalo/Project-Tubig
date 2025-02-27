const accounts = [
    { username: 'admin', role: 'Administrator' },
    { username: 'user1', role: 'Staff' },
    { username: 'user2', role: 'Staff' },
];

const tableBody = document.querySelector('#account-table tbody');

function populateTable() {
    tableBody.innerHTML = accounts
        .map(
            (account) => `
            <tr>
                <td>${account.username}</td>
                <td>${account.role}</td>
                <td>
                    <button onclick="editAccount('${account.username}')">Edit</button>
                    <button onclick="deleteAccount('${account.username}')">Delete</button>
                </td>
            </tr>
        `
        )
        .join('');
}

function editAccount(username) {
    alert(`Edit account: ${username}`);
}

function deleteAccount(username) {
    if (confirm(`Are you sure you want to delete ${username}?`)) {
        alert(`Deleted account: ${username}`);
    }
}

populateTable();