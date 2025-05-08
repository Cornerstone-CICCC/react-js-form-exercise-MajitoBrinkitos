const UserForm = () => {
    return (
        <div className="userForm">
            <h1 className="font-h1 flex justify-center">User Form</h1>
                <form className=" border-1 border-black grid grid-cols-6 content-around gap-4">
                    {/*First Name */}
                    <div className="p-2 col-start-3">
                        <label>
                            First name: <input type="text" id="firstname" name="firstname" className="bg-cyan-500 text-white" />
                        </label>
                    </div>

                    {/*Last Name */}
                    <div className="p-2 col-start-3 col-end-4">
                        <label>
                            Last name: <input type="text" id="lastname" name="lasttname" className="bg-cyan-500 text-white" />
                        </label>
                    </div>
                </form>
        </div>
    );
}

export default UserForm