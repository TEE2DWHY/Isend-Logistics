
const PickUp = () => {

    return (
        <>
            <section id="pickup">
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-lg-6">
                            <img className="logo" src="images/logo.png" alt="" />
                            <form>
                                <label>Reciever's Name</label>
                                <input
                                    type="text"
                                    name="reciever"
                                    required
                                />
                            </form>
                        </div>
                        <div className="col-lg-6 pickup-phase2">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PickUp