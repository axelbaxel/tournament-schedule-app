'use client';

export const RegistrationForm = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add logic to handle form submission here
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="date">Date and Time:</label>
                <input type="datetime-local" id="date" name="date" />

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}