function UserCard({ user }: any) {
  console.log(user);
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default UserCard;
