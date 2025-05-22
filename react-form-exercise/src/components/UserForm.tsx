const UserForm = () => {
    return (
        <div className="userForm">
            <h1 className="font-h1 flex justify-center">User Form</h1>
                <form className=" border-1 border-black grid grid-cols-6 content-around gap-4">
                    {/*First Name */}
                    <div className="p-2 col-start-3">
                        <label htmlFor="firstname">
                            First name: <input type="text" id="firstname" name="firstname" className="bg-cyan-500 text-white" />
                        </label>
                    </div>

                    {/*Last Name */}
                    <div className="p-2 col-start-3 col-end-4">
                        <label htmlFor="lastname">
                            Last name: <input type="text" id="lastname" name="lastname" className="bg-cyan-500 text-white" />
                        </label>
                    </div>

                    {/*Age */}
                    <div className="p-2 col-start-3 col-end-4">
                        <label htmlFor="age">
                            Age: <input type="number" id="age" name="age" className="bg-cyan-500 text-white" />
                        </label>
                    </div>

                    {/*Favourite Foods */}
                    <div className="p-2 col-start-3 col-end-6">
                        <div className="inline-block">
                            <div className="flex">
                                <label htmlFor="local">
                                Local Food <input type="checkbox" id="local" name="local" className="bg-cyan-500 text-white flex"/>
                                </label>
                            </div>

                            <div className="flex">
                                <label htmlFor="home">
                                Home-made food <input type="checkbox" id="home" name="home" className="bg-cyan-500 text-white flex"/>
                                </label>
                            </div>
                            
                            <div className="flex">
                                <label htmlFor="inter">
                                International Food <input type="checkbox" id="inter" name="inter" className="bg-cyan-500 text-white flex"/>
                                </label>
                            </div>
                            
                            <div className="flex">
                                <label htmlFor="fast">
                                Fast Food <input type="checkbox" id="fast" name="fast" className="bg-cyan-500 text-white flex"/>
                                </label>
                            </div>
                

                        </div>
                    </div>
                </form>
        </div>
    );
}

export default UserForm