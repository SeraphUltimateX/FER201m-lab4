import { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon, CardTitle, Row, Col, Card, Container, Section, Button, Collection, CollectionItem, Tabs, Tab } from 'react-materialize'

import './News.css'
import { ThemeContext } from "./ThemeContext";
import { LargeScreenContext } from "./LargeScreenContext";
export default function News() {
    const { theme } = useContext(ThemeContext)
    const largeScreen = useContext(LargeScreenContext)

    const post = (
        <Card
            className="z-depth-5"
            actions={[
                <Link style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.focusedBackgroundColor }}>Read more...</Link>
            ]}
            header={<CardTitle image="/assets/images/cinema.jpg">The CinemaTron</CardTitle>}
        >
            <div className="news-content" style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
                While the coronavirus pandemic continues to have a massive impact on the movie industry, Hollywood continues to press on in 2022. With that in mind, we look ahead to the films we expect to see gracing cineplex marquees in the coming year. And boy, do we have some great titles lined up, with superhero fare like The Batman, Thor: Love and Thunder, and Spider-Man: Across the Spider-Verse (Part One); action and adventure with Uncharted and The Lost City; rousing family films like Sonic the Hedgehog 2 and The Bob’s Burgers Movie; and even some horror, with Scream and Halloween Ends. As more dates are confirmed and trailers are released for all of these 2022 movies, we’ll continue to update this page, so check back often!
            </div>
        </Card>
    )
    let firstSectionDrop = largeScreen ? { transform: 'translateY(50%)' } : {};

    const tab = (
        <Section>
            <Section className="col s12 l4" style={firstSectionDrop}   >
                {post}
            </Section>
            <Section className="col s12 l8">
                <Row>
                    <Col s={12} l={6}>{post}</Col>
                    <Col s={12} l={6}>{post}</Col>
                </Row>
                <Row>
                    <Col s={12} l={4}>{post}</Col>
                    <Col s={12} l={4}>{post}</Col>
                    <Col s={12} l={4}>{post}</Col>
                </Row>
            </Section>
        </Section>
    )
    return (
        <div style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            <Container id='news' >
                <Section 
                    className="z-depth-4"
                    style={{ /*backgroundColor: theme.mutedBackgroundColor, */color: theme.contentTextColor }}
                >
                    <Tabs
                        className="z-depth-2"
                    >
                        <Tab
                            active
                            options={{
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="PREMIERES"
                        >
                            {tab}
                        </Tab>
                        <Tab

                            options={{
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="UPCOMING"
                        >
                            {tab}
                        </Tab>
                        <Tab
                            options={{
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="RE-RUNS"
                        >
                            {tab}
                        </Tab>
                        <Tab
                            options={{
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="REVIEWS"
                        >
                            {tab}
                        </Tab>
                    </Tabs>
                </Section>
            </Container>
        </div>
    )
}
