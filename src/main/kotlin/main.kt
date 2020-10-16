import data.Experience
import data.Redirection
import kotlinx.browser.document
import kotlinx.css.*
import kotlinx.css.properties.boxShadow
import react.dom.*
import segment.experienceSegment
import segment.introSegment
import styled.*
import views.backgroundImage
import views.experienceCard
import views.lineSeparator
import views.linkIcon


fun main() {
    render(document.getElementById("root")) {
        val experiences = listOf(
                Experience(
                        videoUrl = "https://www.youtube.com/embed/Id363jnLcLY",
                        title = "Microflux",
                        description = "Rss reader all that is build using kotlin with MPP in mind Rss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindvvRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindRss reader all that is build using kotlin with MPP in mindvRss reader all that is build using kotlin with MPP in mind",
                        time = "From a to b",
                        redirections = listOf(
                                Redirection(
                                        url = "https://github.com/ConstantinCezB",
                                        icon = "drawable/github.svg"
                                ),
                                Redirection(
                                        url = "https://play.google.com/store/apps/developer?id=Cezar+Constantin+Begu",
                                        icon = "drawable/google-play.svg"
                                )
                        )
                ),
                Experience(
                        videoUrl = "https://www.youtube.com/embed/5qap5aO4i9A",
                        title = "Microflux",
                        description = "Rss reader all that is build using kotlin with MPP in mind",
                        time = "From a to b",
                        redirections = listOf(
                                Redirection(
                                        url = "https://github.com/ConstantinCezB",
                                        icon = "drawable/github.svg"
                                ),
                                Redirection(
                                        url = "https://play.google.com/store/apps/developer?id=Cezar+Constantin+Begu",
                                        icon = "drawable/google-play.svg"
                                )
                        )
                ),
                Experience(
                        videoUrl = "https://www.youtube.com/embed/Id363jnLcLY",
                        title = "Microflux",
                        description = "Rss reader all that is build using kotlin with MPP in mind",
                        time = "From a to b",
                        redirections = listOf(
                                Redirection(
                                        url = "https://github.com/ConstantinCezB",
                                        icon = "drawable/github.svg"
                                ),
                                Redirection(
                                        url = "https://play.google.com/store/apps/developer?id=Cezar+Constantin+Begu",
                                        icon = "drawable/google-play.svg"
                                )
                        )
                ),
        )
        backgroundImage(icon = "drawable/background.png") {}
        styledDiv {
            css {
                color = Color("#fff")
            }
            introSegment {}
            experienceSegment(
                    title = "Work Experience",
                    experiences = experiences
            ) {}
            experienceSegment(
                    title = "Work Experience 2",
                    experiences = experiences
            ) {}
        }
    }
}