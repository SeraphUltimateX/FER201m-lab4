import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon, CardTitle, Card, Container, Section, Button, Collection, CollectionItem } from 'react-materialize'
import './FilmDetails.css'

import { ListOfFilms } from "../shared/ListOfFilms";
import { ThemeContext } from "./ThemeContext";
import { LargeScreenContext } from "./LargeScreenContext";
import { ModalCase } from './ModalCase'
export default function FilmDetails() {
    let params = useParams()
    // console.log(params.id)
    // eslint-disable-next-line
    let film = ListOfFilms.find((e) => { return e.id == params.id })
    console.log(film)

    const largeScreen = useContext(LargeScreenContext)
    const { theme } = useContext(ThemeContext)

    const [isOpen, setIsOpen] = useState(false)

    const filmCast = film.Cast.map((actor) => (
        <CollectionItem className="avatar hoverable">
            <img
                alt=""
                className="circle"
                src={`/${actor.Avatar}`}
            />
            <span className="title" style={{ fontWeight: '700' }}>
                {actor.Name}
            </span>
            <p>
                {actor.Nationality}
                <br />
                {actor.Lifeyears}
            </p>
            <Icon className="secondary-content" style={{ cursor: 'pointer', color: theme.focusedBackgroundColor }}>
                grade
            </Icon>
        </CollectionItem>
    ))

    return (
        <div style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            <Container id='film-details' >
                <Section>
                    <Card
                        className="film-box"
                        style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}
                        horizontal={largeScreen ? true : false}
                        header={<CardTitle image={`/${film.Image}`} className="poster hoverable" reveal></CardTitle>}
                    >
                        <div
                            className="info"
                            style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}
                        >
                            <Section>
                                <div className="title">
                                    <h2>{film.Title}</h2>
                                </div>
                            </Section>
                            <Section>
                                <div className="detail">
                                    <div className="meta-info">
                                        <p className="year" style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}>{film.Year}</p>
                                        <p className="nation" style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}>{film.Nation}</p>
                                    </div>
                                </div>
                            </Section>
                            <Section>
                                <Card
                                    style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}
                                >
                                    <Collection className="cast">
                                        {
                                            filmCast
                                        }
                                    </Collection>
                                </Card>
                                <p className="sypnosis" style={{ textAlign: 'left' }}>{film.Sypnosis}</p>
                            </Section>
                            <Section>
                                <Button
                                    node="button"
                                    style={{
                                        backgroundColor: theme.focusedBackgroundColor,
                                        color: theme.focusedTextColor,
                                        display: "inline-flex",
                                        alignItems: "center"
                                    }}
                                    waves="light"
                                    onClick={() => { setIsOpen(true) }}
                                >
                                    Watch trailer <Icon>play_circle_filled</Icon>
                                </Button>
                            </Section>
                        </div>
                    </Card>
                </Section >

                {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
            </Container >
        </div >
    )
}