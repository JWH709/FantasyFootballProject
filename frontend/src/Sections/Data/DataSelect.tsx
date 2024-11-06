//Need to create a seperate route where I set all of the data I'll be using to make requests to chat.
//assemble league cards here, then team cards, then once both have been selected, re-direct to chat
import LeagueCards from "../Util/LeagueCards"
import TeamCards from "../Util/TeamCards"
import React from "react"

const DataSelect = () => {
    const [selectedLeague, setSelectedLeague] = React.useState<null | []>(null)
    const [selectedTeam, setSelectedTeam] = React.useState<null | []>(null)

    return (
        <>
        </>
    )
}

export default DataSelect