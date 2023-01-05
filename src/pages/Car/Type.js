

const TypeCar = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <span className="col-lg-6 phase-1">
                            <br /> <br /> <br /> <br /> <br />
                            <div className="header-login">
                                <h1 style={{ fontWeight: "bold" }}>Type of Vehicle</h1>
                                <br />
                                <label style={{ fontSize: "16px" }}>Select a type of Vehicle</label>
                                <br />
                                <select style={{ padding: "10px", fontSize: "18px", width: "70%" }}>
                                    <option selected disabled>Choose type</option>
                                    <option>LegedizBenz</option>
                                    <option>Motorcycle</option>
                                    <option>Car</option>
                                </select>
                                <br />
                                <button className="login">Sign Up</button>
                            </div>
                        </span>
                        <span className="col-lg-6 phase-2">
                            <div className="phase-2-contents">
                                <p>Powered by <i style={{ fontSize: "12px", marginLeft: "10px", color: "#7065F0" }} class="fa-solid fa-bookmark"></i>
                                    <br /> <br />
                                    You agree to Porchplus’s Terms of Use & Privacy Policy. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply. </p>
                            </div>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TypeCar