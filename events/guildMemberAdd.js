module.exports = member => {
    let username = member.user.username;
    member.send('Hoşgeldin **' + username + '** Bizi Tercih ettiğiniz için teşekkürler!');
};