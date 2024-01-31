'use client';

export const RegistrationForm = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add logic to handle form submission here
    };

    return (
        <>
            <h1>Add Tournament</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" />

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}