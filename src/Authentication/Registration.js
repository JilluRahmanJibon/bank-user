import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthUser from "../Hooks/AuthUser";
import ServerAPI from "../API/ServerAPI";
const Registration = () => {

    const navigate = useNavigate();
    // if have account redirect to my-account
    const { getToken } = AuthUser();
    if (getToken()) {
        return navigate("/");
    }

    const handleCreateAccount = (e) => {
        e.preventDefault();
        const username = e?.target?.username?.value
        const email = e?.target?.email?.value
        const phone = e?.target?.phone?.value
        const trx = e?.target?.trx?.value
        const password = e?.target?.password?.value
        const address = e?.target?.address?.value
        const company = e?.target?.company?.value
        const companyAddress = e?.target?.companyAddress?.value
        const companyCity = e?.target?.companyCity?.value

        // Get all user data for registration

        if (trx > 5) {
            const data = {
                trx,
                username,
                email,
                phone,
                password,
                address,
                company,
                companyAddress,
                companyCity,
            }
            // call api for post database user data
            fetch(`${ServerAPI}/user/registration`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === "success") {
                        Swal.fire({
                            title: "Success!",
                            text: "Welcome to Genzam bank!",
                            icon: "success",
                            confirmButtonText: "Thank you!",
                            confirmButtonColor: "#374151",
                            background: "#1f2937",
                            color: "#fff",
                        });
                        navigate("/login");
                    } else {
                       
                        if (data.error.includes("duplicate key error")) {
                            return Swal.fire({
                                title: "Error!",
                                text: "You have already create an account!",
                                icon: "error",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#374151",
                                background: "#1f2937",
                                color: "#fff",
                            });
                        }
                        Swal.fire({
                            title: "Error!",
                            text: `${data.error.split(":").slice(2).join(":")}`,
                            icon: "error",
                            confirmButtonText: "Try again",
                            confirmButtonColor: "#374151",
                            background: "#1f2937",
                            color: "#fff",
                        });
                    }
                })
                .catch((err) => {
                    if (err.message) {
                        Swal.fire({
                            title: "Info!",
                            text: `something went wrong`,
                            icon: "info",
                            confirmButtonText: "Try again",
                            confirmButtonColor: "#374151",
                            background: "#1f2937",
                            color: "#fff",
                        });
                    }
                });
        } else {
            Swal.fire({
                title: "Error!",
                text: `only 4 digit code excepted!`,
                icon: "error",
                confirmButtonText: "Try again",
                confirmButtonColor: "#374151",
                background: "#1f2937",
                color: "#fff",
            });
        }
        // document.getElementById("resetFormData").reset();
    };


    // JSX Section for input filed to data get.

    return (
        <div>
            <form
                onSubmit={handleCreateAccount}
                id="resetFormData"
                className="md:w-1/2 flex flex-wrap justify-between shadow-xl rounded mt-[20vh] mx-auto my-auto border-secondary border-2 p-5"
            >
                <div className="mb-6 md:w-72 w-full">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        className="bg-secondary p-2 w-full rounded outline-none"
                        placeholder="username"
                        required
                    />
                </div>
                <div className="mb-6 md:w-72 w-full">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="bg-secondary p-2 w-full rounded outline-none"
                        placeholder="email@gmail.com"
                        required
                    />
                </div>
                <div className="mb-6 md:w-72 w-full">
                    <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Phone
                    </label>
                    <input
                        type="text" pattern="[0-9.]+"
                        name="phone"
                        className="bg-secondary p-2 w-full rounded outline-none"
                        placeholder="provide a valid phone number"
                        required
                    />
                </div>
                <div className="mb-6 md:w-72 w-full">
                    <label
                        htmlFor="trx"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        TRX
                    </label>
                    <input
                        type="text" pattern="[0-9.]+"
                        name="trx"
                        className="bg-secondary p-2 w-full rounded outline-none"
                        placeholder="provide a 4 digit trx number"
                        required
                    />
                </div>
                <div className="mb-6 md:w-72 w-full">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="bg-secondary p-2 w-full rounded outline-none"
                        placeholder="•••••••••"
                        required
                    />
                </div>
                <div className="mb-6 md:w-72 w-full">
                    <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        className="bg-secondary p-2 w-full rounded outline-none"
                        placeholder="type your present address"
                        required
                    />
                </div>
                <div className="mb-6 md:w-72 w-full">
                    <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        className="bg-secondary p-2 w-full rounded outline-none"
                        placeholder="type your company name"
                        required
                    />
                </div>
                <div className="mb-6 md:w-72 w-full">
                    <label
                        htmlFor="companyAddress"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Company Address
                    </label>
                    <input
                        type="text"
                        name="companyAddress"
                        className="bg-secondary p-2 w-full rounded outline-none"
                        placeholder="type your company address name"
                        required
                    />
                </div>
                <div className="mb-6 md:w-72 w-full">
                    <label
                        htmlFor="companyCity"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Company City
                    </label>
                    <input
                        type="text"
                        name="companyCity"
                        className="bg-secondary p-2 w-full rounded outline-none"
                        placeholder="type your company city"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-secondary px-5 py-2 rounded w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Registration;
