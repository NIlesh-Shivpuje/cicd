import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

const UserShowList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data = await response.json();

            setUsers(data);
            setFilteredUsers(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSearch(value);

        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredUsers(filtered);
    };

    const handleCheckbox = (id: number) => {
        setSelectedUsers((prev) => {
            if (prev.includes(id)) {
                return prev.filter((userId) => userId !== id);
            }

            return [...prev, id];
        });
    };

    if (loading) return <h2>Loading...</h2>;

    return (
        <div className="max-w-md mx-auto p-5">
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search user..."
                className="border p-2 w-full rounded"
            />

            <h3 className="mt-3 font-bold">
                Selected Users: {selectedUsers.length}
            </h3>

            <div className="mt-4">
                {filteredUsers.map((user) => (
                    <div
                        key={user.id}
                        className="flex items-center gap-3 py-2"
                    >
                        <input
                            type="checkbox"
                            checked={selectedUsers.includes(user.id)}
                            onChange={() => handleCheckbox(user.id)}
                        />

                        <span>{user.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserShowList;