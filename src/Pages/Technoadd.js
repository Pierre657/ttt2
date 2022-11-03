export default function Technoadd() {
  return (
    <div className="techno-add">
      <form>
        <label htmlFor="techno-name">Name</label>
        <input type="text" name="techno-name" id="techno-name" />
        <br />
        <label htmlFor="techno-category">Category</label>
        <div>
          <select name="techno-category" id="techno-category" className="pointer">
          <option value="">Select a category</option>
          <option value="front">Front</option>
          <option value="back">Back</option>
          <option value="full-stack">Full Stack</option>
          <option value="other">Other</option>
        </select>
        <br />
        </div>
        
        <label htmlFor="techno-description"></label>
        <textarea
          name="techno-description"
          id="techno-description"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
