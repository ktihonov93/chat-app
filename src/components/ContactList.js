import Contact from './Contact';

const users = [
    {
        id: 1,
        name: "Marion Woods",
        avatar: "https://randomuser.me/api/portraits/women/80.jpg",
        online: true
    },
    {
        id: 2,
        name: "Jessica Cruz",
        avatar: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    {
        id: 3,
        name: "Wyatt Herrera",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        online: true
    },
    {
        id: 4,
        name: "Greg Snyder",
        avatar: "https://randomuser.me/api/portraits/men/0.jpg"
    },
    {
        id: 5,
        name: "Vanessa Kuhn",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        online: true
    }
]

function ContactList() {
    return (
      <div className="ContactList">
        {users.map(user => (<Contact key={user.id} name={user.name} avatar={user.avatar} online={user.online}/>))}
      </div>
    );
  }

export default ContactList;