import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import DescriptionBrief from '../description-brief/descriptionBrief';

// import Preloader from '../preloader/preloader';
// import BtnDefault from '../../ui/buttons/btnDefault';
import { getStatePopoverView } from '../../actions/actionsFilms';

import "./_sections.scss";

class SectionsHome extends React.Component {


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
        // setTimeout(() => (window.scroll({ top: 0, left: 0, behavior: 'smooth' })), 600)
        window.scroll({ top: 0, left: 0 });
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    componentDidMount() {

    }

    viewPopoverHandler(stateViewPopover) {
        this.props.films.popoverView = stateViewPopover;
        this.props.setStatePopoverView(this.props.films.popoverView);
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    render() {
        return (
            <div className="popover-wrap"
                onMouseEnter={() => {

                    // Передаем параметры для отображения Popover окна с краткими данными по фильму
                    const stateViewPopover = {
                        'id': this.props.filmsAllItems.id,
                        'view': true
                    };

                    this.viewPopoverHandler(stateViewPopover);
                }}
                onMouseLeave={() => {

                    // Передаем параметры для скрытия Popover окна с краткими данными по фильму
                    const stateViewPopover = {
                        'id': this.props.filmsAllItems.id,
                        'view': false
                    };

                    this.viewPopoverHandler(stateViewPopover);
                }}
            >
                <Link
                    to={`vf/${this.props.filmsAllItems.films_to_genres[0].id}/${this.props.filmsAllItems.films_to_genres[0].slug}/${this.props.filmsAllItems.id}/${this.props.filmsAllItems.slug}`}
                >
                    {/* <div uk-tooltip={'title: ' + this.props.filmsAllItems.description + '; pos: right-top; delay: 500;'} > */}
                    <div>
                        <div className="uk-card-media-top">
                            <img src={"http://tube-serv" + this.props.filmsAllItems.poster_img} alt={this.props.filmsAllItems.slug} />
                        </div>
                        <h5>{this.props.filmsAllItems.title}</h5>
                    </div>
                </Link>

                {
                    this.props.films.popoverView.id == this.props.filmsAllItems.id && this.props.films.popoverView.view ?
                        <DescriptionBrief />
                        :
                        null
                }

            </div>

        )
    }
}

const mapStateToProps = props => {

    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStatePopoverView: (popoverView) => {
            dispatch(getStatePopoverView(popoverView));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsHome);
