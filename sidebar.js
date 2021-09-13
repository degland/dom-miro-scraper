miro.onReady(() => {
    // subscribe on user selected widgets
    miro.addListener(miro.enums.event.SELECTION_UPDATED, generateList)
    generateList()
})

// Get html elements for tip and text container
const tipElement = document.getElementById('tip')
const widgetTextElement = document.getElementById('widget-text')

const version = 7

async function generateList() {
    // Get selected widgets
    //let widgets = await miro.board.selection.get()
    let widgets = await miro.board.widgets.get()

    widgets = widgets.filter((widget) => widget.type === "STICKER")


    let text = "" + version + "\n"
    
    const html_trim_regex = new RegExp("<\/?\w+>")
    const test_regex =  new RegExp("wiz")

    widgets.forEach(widget => {
        let tags = []
        // widget.tags.foreach(tag => {
        //     text += "-----\n"
        //     // tags.append(tag.title)
        //     // text += tag.title + "\n"
        // })

        text += widget.tags[0].title

        text += "-----\n"

        if(!tags.includes("export-ignore"))
        {

            let line = ""
            let title = widget.text

            let identified = false

            let biome = "uncategorised"
            let type = "uncategorised"
            let subtype = "uncategorised"

            //format the tag sort of like json?

            //biome:1
            //type:item
            //subtype:crafted-tool




            let label = widget.text
            label = label.replace(html_trim_regex, "")
            text += label + "\n"
            let label2 = "wizard2"
            label2 = label2.replace(test_regex, "")
            text += label2 + "\n"
        }       
    });

    
    

    // Check that widget has text field
    if (typeof text === 'string') {
        // hide tip and show text in sidebar
        tipElement.style.opacity = '0'
        widgetTextElement.value = text
    } else {
        // show tip and clear text in sidebar
        tipElement.style.opacity = '1'
        widgetTextElement.value = ''
    }
}