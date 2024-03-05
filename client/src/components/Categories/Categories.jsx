import React from 'react'
import './Categories.scss';
import { Link } from 'react-router-dom';


const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
        <div className="row">
            <img src="https://images.fineartamerica.com/public/images/overview/overviewLifestyle004.jpg" alt="" />
            <button>
                <Link className='link' to={`/product/1`}>Sale</Link>
            </button>
        </div>
        <div className="row">
        <img src="https://images.fineartamerica.com/public/images/overview/overviewBeach004.jpg" alt="" />
        <button>
                <Link className='link' to={`/product/1`}>Women</Link>
            </button>
        </div>

        </div>
        <div className="col">
        <div className="row">
        <img src="https://images.fineartamerica.com/public/images/overview/overviewBeach004.jpg" alt="" />
        <button>
                <Link className='link' to={`/product/1`}>Men</Link>
            </button>
        </div>

        </div>
        <div className="col col-l">
           <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.fineartamerica.com/public/images/overview/overviewBeach004.jpg" alt="" />
        <button>
                <Link className='link' to={`/product/1`}>New Appraisal</Link>
            </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.fineartamerica.com/public/images/overview/overviewBeach004.jpg" alt="" />
        <button>
                <Link className='link' to={`/product/1`}>Winter</Link>
            </button>
                    </div>
                </div>
           </div>
        <div className='row'>
        <img src="https://images.fineartamerica.com/public/images/overview/overviewBeach004.jpg" alt="" />
        <button>
                <Link className='link' to={`/product/1`}>Summer</Link>
            </button>
        </div>
        </div>
    </div>
  )
}


export default Categories
