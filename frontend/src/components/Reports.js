import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import heatmap from '../images/correlation_heatmap.png'
import avp from '../images/actual_vs_predicted.png'
const Reports = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <div>
            <nav className="bg-blue-500 p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">Kavach</div>
                    <ul className="flex space-x-4">
                        <li><Link to="/dashboard" className="hover:text-gray-300 text-lg">Home</Link></li>
                        <li><Link to="/calender" className='hover:text-gray-300 text-lg'>Calender</Link></li>
                        <li><Link to="/reports" className='hover:text-gray-300 text-lg'>Reports</Link></li>
                        <li><Link to="/profile" className="hover:text-gray-300 text-lg">Profile</Link></li>
                        { }
                        <li><button onClick={logout} className="hover:text-gray-300 text-lg">Logout</button></li>
                    </ul>
                </div>
            </nav>

            <div className="flex justify-center items-center">
                <div className='mt-2'>
                    <div className='text-2xl font-bold text-center'>Correlation heatmap</div>
                    <img src={heatmap} alt="heatmap" height="500" width="500" />
                </div>
                <div>
                    <div className='text-2xl font-bold text-center'>Actual vs Predicted</div>
                    <img src={avp} alt="avp" height="550" width="550" />
                </div>
                
            </div>
        </div>
    )
}

export default Reports