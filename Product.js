import App from "../App";
import { Link } from "react-router-dom";

const Product = ()=>{
    
    const arr=[
        {
           "URL" : "https://tse4.mm.bing.net/th?id=OIP._nDapFvhiv8GKIbUyAzV9gHaHa&pid=Api&P=0&h=180",
           "AVATAR" : "https://tse1.mm.bing.net/th?id=OIP.GneL7CLsqr9LQTK2KsN5qAHaHa&pid=Api&P=0&h=180"
        }
    ];
    const result = arr.map((item)=>{
        return( 
            <>
            <div class="container text-center">
                <div class="row row-cols-4">
                    <div class="col">
                    <div class="card">
                    <div class="row">
                    <div class="col-12">
                        <img class="img-fluid w-100 g-rounded-15 g-rounded-bottom-0 img-faculty card" src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg" alt="Dr. Gopi Bhupendrabhai Sanghani - Darshan Institute of Engineering and Technology" title="Dr. Gopi Bhupendrabhai Sanghani is Dean - School of Computer Science at Department of Computer Science and Engineering"></img>
                                            <div class="g-px-10 g-pt-20">
                                                <br/>
                                                <h2 class="h5 g-font-primary g-color-black g-font-weight-600 text-center g-mb-0">
                                                    Dr. Gopi Sanghani
                                                </h2>
                                                <span class="d-block g-color-primary g-font-weight-600 g-font-size-12 text-center g-mb-10">
                                                    Dean - School of Computer Science
                                                </span>
                                                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <span class="d-block g-color-gray-dark-v3 g-font-weight-500 text-center g-px-20 g-font-size-12">
                                                Ph.D. , M.E. (CE)
                                            </span>
                                        </div>
                                        <div class="col-12">
                                            <div class="g-px-10 g-pb-20">
                                                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>

                                                <div class="row text-center g-mb-20 no-gutters">
                                                    <div class="col-6">
                                                        <span class="d-block g-color-gray-dark-v3 g-font-weight-600 g-font-size-10 g-mb-5">
                                                            Experience
                                                        </span>
                                                        <span class="btn btn-sm g-bg-blue-opacity-0_1 g-color-blue g-font-weight-700 g-font-size-12;">
                                                            24+ Years
                                                        </span>
                                                    </div>
                                                    <div class="col-6">
                                                        <span class="d-block  g-color-gray-dark-v3 g-font-weight-600 g-font-size-10 g-mb-5">
                                                            Working Since
                                                        </span>
                                                        <span class="btn btn-sm g-bg-bluegray-opacity-0_1 g-color-bluegray g-color-blue g-font-weight-700 g-font-size-12;" >
                                                            Jul-2012
                                                        </span>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                    <div class="row">
                    <div class="col-12">
                        <img class="img-fluid w-100 g-rounded-15 g-rounded-bottom-0 img-faculty card" src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg" alt="Dr. Nilesh Maganbhai Gambhava - Darshan Institute of Engineering and Technology" title="Dr. Nilesh Maganbhai Gambhava is Professor at Department of Computer Science and Engineering"></img>
                                            <div class="g-px-10 g-pt-20">
                                            <br/>
                                                <h2 class="h5 g-font-primary g-color-black g-font-weight-600 text-center g-mb-0">
                                                    Dr. Nilesh Gambhava
                                                </h2>
                                                <span class="d-block g-color-primary g-font-weight-600 g-font-size-12 text-center g-mb-10">
                                                    Professor
                                                </span>
                                                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <span class="d-block g-color-gray-dark-v3 g-font-weight-500 text-center g-px-20 g-font-size-12">
                                                Ph.D. , M.E. (CE)
                                            </span>
                                        </div>
                                        <div class="col-12">
                                            <div class="g-px-10 g-pb-20">
                                                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>

                                                <div class="row text-center g-mb-20 no-gutters">
                                                    <div class="col-6">
                                                        <span class="d-block g-color-gray-dark-v3 g-font-weight-600 g-font-size-10 g-mb-5">
                                                            Experience
                                                        </span>
                                                        <span class="btn btn-sm g-bg-blue-opacity-0_1 g-color-blue g-font-weight-700 g-font-size-12;">
                                                            21+ Years
                                                        </span>
                                                    </div>
                                                    <div class="col-6">
                                                        <span class="d-block  g-color-gray-dark-v3 g-font-weight-600 g-font-size-10 g-mb-5">
                                                            Working Since
                                                        </span>
                                                        <span class="btn btn-sm g-bg-bluegray-opacity-0_1 g-color-bluegray g-color-blue g-font-weight-700 g-font-size-12;" >
                                                            Jul-2009
                                                        </span>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                    <div class="row">
                    <div class="col-12">
                        <img class="img-fluid w-100 g-rounded-15 g-rounded-bottom-0 img-faculty card" src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg" alt="Prof. Arjun Virjibhai Bala - Darshan Institute of Engineering and Technology" title="Prof. Arjun Virjibhai Bala is Assistant Professor at Department of Computer Science and Engineering"></img>
                                            <div class="g-px-10 g-pt-20">
                                            <br/>
                                                <h2 class="h5 g-font-primary g-color-black g-font-weight-600 text-center g-mb-0">
                                                    Prof. Arjun Bala
                                                </h2>
                                                <span class="d-block g-color-primary g-font-weight-600 g-font-size-12 text-center g-mb-10">
                                                    Assistant Professor
                                                </span>
                                                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <span class="d-block g-color-gray-dark-v3 g-font-weight-500 text-center g-px-20 g-font-size-12">
                                                Ph.D.(Pursuing), M.Tech.(CSE)
                                            </span>
                                        </div>
                                        <div class="col-12">
                                            <div class="g-px-10 g-pb-20">
                                                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>

                                                <div class="row text-center g-mb-20 no-gutters">
                                                    <div class="col-6">
                                                        <span class="d-block g-color-gray-dark-v3 g-font-weight-600 g-font-size-10 g-mb-5">
                                                            Experience
                                                        </span>
                                                        <span class="btn btn-sm g-bg-blue-opacity-0_1 g-color-blue g-font-weight-700 g-font-size-12;">
                                                            14+ Years
                                                        </span>
                                                    </div>
                                                    <div class="col-6">
                                                        <span class="d-block  g-color-gray-dark-v3 g-font-weight-600 g-font-size-10 g-mb-5">
                                                            Working Since
                                                        </span>
                                                        <span class="btn btn-sm g-bg-bluegray-opacity-0_1 g-color-bluegray g-color-blue g-font-weight-700 g-font-size-12;" >
                                                            Jul-2013
                                                        </span>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                    <div class="row h-100">
                                <div class="col-12">
                                        <img class="img-fluid w-100 g-rounded-15 g-rounded-bottom-0 img-faculty card" src="https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg" alt="Dr. Pradyumansinh U. Jadeja - Darshan Institute of Engineering and Technology" title="Dr. Pradyumansinh U. Jadeja is Professor at Department of Computer Science and Engineering"></img>
                                        <div class="g-px-10 g-pt-20">
                                        <br/>
                                            <h2 class="h5 g-font-primary g-color-black g-font-weight-600 text-center g-mb-0">
                                                Dr. Pradyumansinh Jadeja
                                            </h2>
                                                <span class="d-block g-color-primary g-font-weight-600 g-font-size-12 text-center g-mb-10">
                                                    Professor
                                                </span>
                                                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <span class="d-block g-color-gray-dark-v3 g-font-weight-500 text-center g-px-20 g-font-size-12">
                                                Ph.D., M.E. (CE)
                                            </span>
                                        </div>
                                        <div class="col-12">
                                            <div class="g-px-10 g-pb-20">
                                                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5"></hr>

                                                <div class="row text-center g-mb-20 no-gutters">
                                                    <div class="col-6">
                                                        <span class="d-block g-color-gray-dark-v3 g-font-weight-600 g-font-size-10 g-mb-5">
                                                            Experience
                                                        </span>
                                                        <span class="btn btn-sm g-bg-blue-opacity-0_1 g-color-blue g-font-weight-700 g-font-size-12">
                                                            19+ Years
                                                        </span>
                                                    </div>
                                                    <div class="col-6">
                                                        <span class="d-block  g-color-gray-dark-v3 g-font-weight-600 g-font-size-10 g-mb-5">
                                                            Working Since
                                                        </span>
                                                        <span class="btn btn-sm g-bg-bluegray-opacity-0_1 g-color-bluegray g-color-blue g-font-weight-700 g-font-size-12">
                                                            Jul-2009
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <Link href="#" className='btn btn-info m-1' to='/' element={<App/>}>BACK TO HOME</Link>
            <br/>
            </>
        );
    });
    return(
        <>
            <div> {result} </div>
        </>
    );
}
export default Product;