import pandas as pd

CSV_FILE = "wildhacks_apps.csv" 

wildhacks = pd.DataFrame.from_csv(CSV_FILE, index_col = None)

# Rename DataFrame columns
wildhacks = wildhacks.rename(columns = {
        "Name"  : "name",
        "Email" : "email",
        "Class of" : "year",
        "Major" : "major",
        "Please provide a link to your GitHub account" : "github",
        "How did you hear about the event?" : "hearabout",
        "Team Code" : "team",
        "What state will you be coming from?" : "state",
        "Eventbrite Invitation Sent?" : "invited",
        "Resume?" : "resume",
        "Did they register?" : "registered"
    })

# Normalize 'year' field

