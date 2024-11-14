function Form(){
    return (
      <form name="custom" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="custom" />
        <p>
          <label htmlFor="name">
            NAME
            <br />
            <input type="text" name="name" required />
          </label>
        </p>
        <br />
        <p>
          <label htmlFor="email">
            EMAIL
            <br /> <input type="email" name="email" required />
          </label>
        </p>
        <br />
        <p>
          <label htmlFor="message">
            DETAILS <br /> <textarea name="message" required></textarea>
          </label>
        </p>
        <br />
        <p>
          <input type="submit" value="SUBMIT INQUIRY" />
        </p>
      </form>
    );
}

export default Form;