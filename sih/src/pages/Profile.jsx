import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <form>
        <label>
          Name
          <input type="text" value="Farmer Ramesh" />
        </label>
        <label>
          Phone
          <input type="text" value="+91 9876543210" />
        </label>
        <label>
          Preferred Language
          <select>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;
