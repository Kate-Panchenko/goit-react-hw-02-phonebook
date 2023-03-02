

export const Contacts = ({contacts}) => {
    console.log(contacts);
    return (
        <ul>
            {contacts.map(contact => {
                return <li key={contact.id}>
                    {contact.name}
                </li>
            })}
        </ul>
    )
}