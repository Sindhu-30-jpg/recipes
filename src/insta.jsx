export function Insta({ profile, username, followers, following }) {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "1px solid grey",
        borderRadius: "20px",
        padding: "20px",
        textAlign: "center",
        margin: "10px",
        backgroundColor:'white'
        
      }}
    >
      <img
        src={profile}
        alt={username}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />

      <h2>{username}</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          color:'black'
        }}
      >
        <div>
          <b>{followers}</b>
          <p>Followers</p>
        </div>

        <div>
          <b>{following}</b>
          <p>Following</p>
        </div>
      </div>

      <button>Follow</button>
    </div>
  );
}

export default Insta;
