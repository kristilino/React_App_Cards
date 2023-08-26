import profileImg from '../assets/profile.jpg'
import '../styles/Card.css'


function Card({person}) {

  return (
    <>
    <div className="card_session" >
      <div className="card-container" style={{backgroundColor: person.bg}}>
        <div className="profilePic">
            <img src={profileImg} alt="profile image" />
        </div>
        <div className="info">
            <h2>{person.fname}</h2>
            <p>{person.title}</p>
            <table>
                <thead>
                    <tr>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Socials</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                        <td>Github: {person.github}</td>
                    </tr>
                </tbody>
            </table>
            <div className="bio">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. 
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Card