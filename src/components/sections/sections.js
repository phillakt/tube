import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import BtnDefault from '../../ui/buttons/btnDefault';

import "./_sections.scss";

class Sections extends React.Component {


    getTitle() {
        return (
            <h1 className="
            uk-heading-line 
            uk-heading-medium 
            uk-padding 
            uk-padding-remove-left
            uk-padding-remove-top
            tb-title__h1
            ">
                <span>{this.props.title}</span>
            </h1>
        )
    }

    toUpWindow() {
        setTimeout(() => (window.scroll({ top: 0, left: 0, behavior: 'smooth' })), 600)
    }

    render() {

        return (
            <div>
                <div className="uk-section">
                    <div className="uk-container">

                        {this.props.title ? this.getTitle() : null}

                        <div uk-grid="true" className="uk-grid-match">

                            {
                                this.props.dataPosts ?
                                    this.props.dataPosts.map((item, i) => {

                                        return (
                                            <div
                                                className="uk-width-1-5@m"
                                                key={item.thumbnailUrl}
                                            >
                                                <Link onClick={() => (this.toUpWindow())} to={"/video/" + item.id} className="uk-card uk-card-default uk-card-body tb-card-body"
                                                // style={{ backgroundImage: `url(${item.url})` }}
                                                ></Link>

                                                <div>
                                                    <span
                                                        className="tb-tooltip-box"
                                                        uk-tooltip="title: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum vel laborum itaque dolor adipisci voluptates quae inventore est ad dolores?; pos: top-left"
                                                    >Описание</span>
                                                    <span>

                                                    </span>
                                                </div>


                                                <div>
                                                    {/* <Link className="tb-link" to={"page/" + item.id}>{item.title}</Link> */}
                                                    <Link onClick={() => (this.toUpWindow())} className="tb-link" to={"/video/" + item.id}>Название серии</Link>
                                                </div>

                                            </div>
                                        )
                                    }) : null
                            }

                        </div>

                        <div className="uk-flex-center" uk-grid="true">
                            <BtnDefault name="Показать еще" getPosts={this.props.getPosts} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = props => (props);

export default connect(mapStateToProps, null)(Sections);
