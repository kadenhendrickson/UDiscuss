import React, { Component } from 'react';
import './../css/LightTheme.css';
import UtahU from './../Images/UtahU.png';
import Mountains from './../Images/mountains.jpg';

export class Welcome extends Component {
    static displayName = Welcome.name;

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                
                <h1 className=' text-center'> Welcome To </h1>

                <div className="align-items-center d-flex justify-content-center text-center">
                    <img className=" m-1 mt-3" height="65px" width="65px" src={UtahU} />
                    <p className='display-1 b text-center'> Discuss </p>

                </div>

                <img className="float-right img-thumbnail img-fluid mx-auto d-block" src={Mountains} alt="Salt Lake City mountains" />

                <div className="mt-3 border secondary-color p-3 h-100 d-flex flex-column">
                    <p>
                        Home of the university's new online discussion forum. Here is where
                        you can post questions to your class, participate in discussions, and
                        view your professors' announcements. Please log in or sign up to get started!
                        </p>

                </div>

                <button class="btn m-2 w-25 btn-danger mt-auto">Login</button>
                <button class="btn m-2 w-50 btn-outline-danger mt-auto">Sign Up</button>

            </div>
        );
    }
}




/*            <div class="container-fluid">

                <div class="jumbotron text-danger">
                    <h1 class="display-3 text-center">Welcome University of Utah Students and Faculty</h1>
                    <h5 class="display-5 text-center">This is the home of the School of Computing's TA application site!</h5>
                    <img class="float-right img-thumbnail img-fluid mx-auto d-block" src={Mountains} alt="Salt Lake City mountains" />
                </div>

                <div class="row">
                    <div class=" col-sm-4">

                        <div class="border bg-dark text-white p-3 h-100 d-flex flex-column">
                            <h4 class="mt-2">Is teaching right for you?</h4>
                            <p>
                                Many students question whether or not they are ready to become a TA.
                                However, you can TA for any course right after you take it! Students with high GPAs and an interest in programming
                                are strongly encouraged to apply!
                            </p>
                            <button class="btn m-2 btn-danger mt-auto">Learn More</button>
                        </div>
                    </div>

                    <div class=" col-sm-4">
                        <div class="border bg-dark text-white p-3 h-100 d-flex flex-column">
                            <h4 class="mt-2">Pay and Benefits</h4>
                            <p>
                                We generally pay TAs $15-20 an hour. Depending on your skill level and TA eperience, you may be compensated more.
                                No matter the pay, teaching is something that will help build career skills for you and look great on a resume.
                            </p>
                            <button class="btn m-2 btn-danger mt-auto">Learn More</button>
                        </div>
                    </div>

                    <div class=" col-sm-4">
                        <div class="border bg-dark text-white p-3 h-100 d-flex flex-column">
                            <h4 class="mt-2">Being a TA is fun!</h4>
                            <p>
                                One of the best ways to meet new people on campus is by working beside them! In addition, the SoC will
                                hold events for you and other TAs to meet and discuss your daily lives.
                            </p>
                            <button class="btn m-2 btn-danger mt-auto">Learn More</button>
                        </div>
                    </div>

                </div>
            </div>

*/