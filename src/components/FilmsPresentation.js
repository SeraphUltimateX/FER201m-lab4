import { useContext, /*useEffect, useState*/ } from "react";
import { useNavigate } from "react-router-dom";
import { /*Icon, CardTitle,*/ Row, Col, Card, Container, Section } from 'react-materialize'

import './FilmsPresentation.css'
import { ThemeContext } from "./ThemeContext";
import { LargeScreenContext } from "./LargeScreenContext";

export default function FilmsPresentation({ listOfFilms }) {
    // console.log(listOfFilms);

    const largeScreen = useContext(LargeScreenContext)
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate();
    // const [curFilm, setCurFilm] = useState([])

    const perRow = 3;
    let rows = []
    for (let i = 0; i < listOfFilms.length; i += perRow) {
        rows.push(
            <Row key={i}>
                {
                    listOfFilms.slice(i, i + perRow).map((film) => (
                        <Col key={film.id} className="s12 l4">
                            <Card
                                className="film-box"
                                horizontal
                                header={
                                    <div className="poster">
                                        <img src={film.Image} alt="" />
                                    </div>}
                            >
                                <div className="info"
                                    style={
                                        // largeScreen
                                        //     ?
                                        { backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }
                                        // :
                                        // { backgroundColor: theme.seethroughBackgroundColor, color: theme.contentTextColor }
                                    }
                                >
                                    <div className="title">
                                        <h2>{film.Title}</h2>
                                    </div>
                                    <div className="detail">
                                        <p className="year" style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}>{film.Year}</p>
                                        <p className="nation">{film.Nation}</p>
                                        <p className="btn-more-detail">
                                            {/* <Link to={`/details/${film.id}`}> */}
                                            <button onClick={() => navigate(`/details/${film.id}`)
                                            } style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}>
                                                Detail
                                            </button>
                                            {/* </Link> */}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        )
    }

    return (
        <div style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            <Container id='film-catalog'>
                <Section>
                    {
                        rows
                    }
                </Section>
            </Container >
        </div>
    );
}