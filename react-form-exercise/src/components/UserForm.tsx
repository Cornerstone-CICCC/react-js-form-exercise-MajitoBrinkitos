
import { useForm } from 'react-hook-form'

type FormData = {
    firstname: string,
    lastname: string,
    age: number,
    chicken: boolean,
    beef: boolean,
    vegetables: boolean,
    dessert: boolean,
    pork: boolean
}

const UserForm = () => {

    const {
        register,
        handleSubmit,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) =>{
        const favoriteFoods = Object.keys(data)
        .filter((key) => data[key as keyof FormData] === true)
        .join(", ");

        alert(`Welcome ${data.firstname} ${data.lastname}. You are ${data.age} years old. And your favorite foods are ${favoriteFoods}`);
    };

    return (
        <div className="userForm">
            <h1 className="font-h1 flex justify-center">User Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} className=" border-1 border-black grid grid-cols-6 content-around gap-4">
                    {/*First Name */}
                    <div className="p-2 col-start-3">
                        <label htmlFor="firstname">
                            First name: <input 
                            {
                            ...register("firstname", {
                                required: "First name is required"
                            })    
                            } 
                            type="text" id="firstname" name="firstname" className="bg-cyan-500 text-white" />
                        </label>
                    </div>

                    {/*Last Name */}
                    <div className="p-2 col-start-3 col-end-4">
                        <label htmlFor="lastname">
                            Last name: <input 
                            {
                                ...register("lastname", {
                                    required: "Last name is required"
                                })
                            }
                            type="text" id="lastname" name="lastname" className="bg-cyan-500 text-white" />
                        </label>
                    </div>

                    {/*Age */}
                    <div className="p-2 col-start-3 col-end-4">
                        <label htmlFor="age">
                            Age: <input 
                            {
                                ...register("age", {
                                    required: "Age is required",
                                })
                            }
                            type="number" id="age" name="age" className="bg-cyan-500 text-white" />
                        </label>
                    </div>

                    {/*Favourite Foods */}
                    <div className="p-2 col-start-3 col-end-6">
                        <div className="inline-block">
                            <div className="flex">
                                <label htmlFor="chicken">
                                Chicken <input 
                                {
                                    ...register("chicken")
                                }
                                type="checkbox" id="chicken" name="chicken" className="bg-cyan-500 text-white flex"/>
                                </label>
                            </div>

                            <div className="flex">
                                <label htmlFor="beef">
                                Beef <input
                                {
                                    ...register("beef")
                                }
                                type="checkbox" id="beef" name="beef" className="bg-cyan-500 text-white flex"/>
                                </label>
                            </div>
                            
                            <div className="flex">
                                <label htmlFor="vegetables">
                                Vegetables <input 
                                {
                                    ...register("vegetables")
                                }
                                type="checkbox" id="vegetables" name="vegetables" className="bg-cyan-500 text-white flex"/>
                                </label>
                            </div>
                            
                            <div className="flex">
                                <label htmlFor="dessert">
                                Dessert <input 
                                {
                                    ...register("dessert")
                                }
                                type="checkbox" id="dessert" name="dessert" className="bg-cyan-500 text-white flex"/>
                                </label>
                            </div>

                            <div className="flex">
                                <label htmlFor="pork">
                                Pork <input
                                {
                                    ...register("pork")
                                }
                                type="checkbox" id="pork" name="pork" className="bg-cyan-500 text-white flex"/>
                                </label>
                            </div>
                

                        </div>
                    </div>

                    <div className='btns'>
                        {/*Display User Button */}
                        <button type="submit" className="bg-[orange] text-black font-bold rounded-lg w-25 h-20 items-center p-5 flex mb-2">
                            Display User
                        </button>

                        {/*Clear Button */}
                        <button type="reset" className='bg-[grey] text-white font-bold rounded-lg w-25 h-20 items-center p-5 flex'>
                            Clear Form
                        </button>
                    </div>
                </form>
        </div>
    );
}

export default UserForm