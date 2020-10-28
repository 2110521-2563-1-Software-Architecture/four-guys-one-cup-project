import React from "react";

const SearchBar = () => {
    return (
        <div className="col-lg-6 col-12 col-sm-12">
            <form action="#" className="search">
                <div className="input-group w-100">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        style={{ borderColor: "white" }}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-light" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
