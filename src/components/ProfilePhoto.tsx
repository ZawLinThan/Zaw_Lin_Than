import portrait from "../assets/zaw-lin-than.jpg";

const ProfilePhoto = () => (
  <figure className="profile-photo">
    <img
      src={portrait}
      alt="Portrait of Zaw Lin Than"
      width={600}
      height={600}
      decoding="async"
    />
    <figcaption>
      <span>Zaw Lin Than</span>
      <span>Computer Science · Georgia Tech</span>
    </figcaption>
  </figure>
);

export default ProfilePhoto;
