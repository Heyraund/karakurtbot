module.exports = member => {
  let guild = member.guild;
  let username = member.user.username;
  member.send('Görüşürüz Tekrar Gel! **' + username + '**');
};
