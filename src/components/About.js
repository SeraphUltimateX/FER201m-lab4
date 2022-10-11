import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Icon, Container, Section, Collapsible, CollapsibleItem, Slider, Slide, Caption } from 'react-materialize'

import './About.css'
export default function About() {
    const { theme } = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            <Container id='about' >
                <Section
                // style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}
                >
                    <Slider
                        fullscreen={false}
                        options={{
                            duration: 500,
                            height: 400,
                            indicators: true,
                            interval: 6000
                        }}
                    >
                        <Slide image={<img alt="" src="/assets/images/about1.jpg" />}>
                            <Caption placement="center">
                                <h3>
                                    Hi there!
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Welcome to Horizon Movies.
                                </h5>
                            </Caption>
                        </Slide>
                        <Slide image={<img alt="" src="/assets/images/about2.jpg" />}>
                            <Caption placement="left">
                                <h3>
                                    Who are we?
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Only the geekiest of movie geeks.
                                </h5>
                            </Caption>
                        </Slide>
                        <Slide image={<img alt="" src="/assets/images/about3.jpg" />}>
                            <Caption placement="right">
                                <h3>
                                    Where are we?
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    All over this very Earth.
                                </h5>
                            </Caption>
                        </Slide>
                        <Slide image={<img alt="" src="/assets/images/about4.jpg" />}>
                            <Caption placement="center">
                                <h3>
                                    And our mission?
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    To bring you only the best cinema has to offer!
                                </h5>
                            </Caption>
                        </Slide>
                    </Slider>
                    <Collapsible accordion={false} popout>
                        <CollapsibleItem
                            expanded={true}
                            header="The Team"
                            icon={<Icon>group</Icon>}
                        >
                            From the hunble beginning of just the venerable Sir Alt and his cohorts, we have since grown into legion, comprising of dwellers of all realms.
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header="Our Mission"
                            icon={<Icon>location_on</Icon>}
                        >
                            To mend the schism that had torn our community - the community of movie geeks - apart. And from it we shall rise anew.
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header="Wanna join us?"
                            icon={<Icon>whatshot</Icon>}
                        >
                            Bewarn! Abandon all hope ye who enter here; once a geek, always a geek, there is no going back... But if you're up for it, just send us an email.
                        </CollapsibleItem>
                    </Collapsible>
                </Section>
            </Container>
        </div>
    )
}
