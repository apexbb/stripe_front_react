import { Form } from "react-router-dom";
interface contactprops2 {
    first: string,
    last: string,
    twitter: string,
    notes: string,
    favorite: string,
}
type contactprops = {
    first: string,
    last: string,
    twitter: string,
    notes: string,
    favorite: string,
}

type favprops = {
    favorite: string,
}

const contact = () => {
    const contact = {
        first: "Your",
        last: "Name",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: "string",
      };
    
    
      return (
        <div id="contact">
          <div>
          </div>
    
          <div>
            <h1>
              {contact.first || contact.last ? (
                <>
                  {contact.first} {contact.last}
                </>
              ) : (
                <i>No Name</i>
              )}{" "}
              <Favorite contact={contact} />
            </h1>
    
            {contact.twitter && (
              <p>
                <a
                  target="_blank"
                  href={`https://twitter.com/${contact.twitter}`}
                >
                  {contact.twitter}
                </a>
              </p>
            )}
    
            {contact.notes && <p>{contact.notes}</p>}
    
            <div>
              <Form action="edit">
                <button type="submit">Edit</button>
              </Form>
              <Form
                method="post"
                action="destroy"
                onSubmit={(event) => {
                  if (
                    !confirm(
                      "Please confirm you want to delete this record."
                    )
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <button type="submit">Delete</button>
              </Form>
            </div>
          </div>
        </div>
      );
    }
    
    const Favorite = (contact:contactprops): JSX.Element =>  {
      // yes, this is a `let` for later
      return (
        <Form method="post">
          <button
          >
          </button>
        </Form>
      );
    }
    


export default contact