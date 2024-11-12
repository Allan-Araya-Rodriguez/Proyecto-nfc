interface Contact {
    name: string;
    phone: string;
}

interface ContactDataProps {
    contacts: Contact[];
}

export default function ContactData({ contacts }: ContactDataProps) {
    return (
        <table className="table-auto border-separate border-spacing-x-2 md:border-spacing-x-4 mt-2 md:mt-0 ml-6 md:ml-0">
            <tbody>
                {contacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
