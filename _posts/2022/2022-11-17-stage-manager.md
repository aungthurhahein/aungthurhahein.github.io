---

title: MacOS Stage Manager and My Expectations for the next Update
author: aung
date: 2022-11-17 09:15:00 +0700
categories: [Tech, MacOS]
tags: [MacOS, Apple]
math: false
mermaid: false
image:
  path: /stage-manager.png
  width: 600
  height: 400
---

From a super user comes from Windows 95 to 10 and a variety of Linux Window manager from GUI to tiling Window Manager, I put myself as slightly above average level in terms of understanding in desktop window organization. 

When I started using MacOS 3 years ago, my frustration with a dozen of floating apps and almost impossible to point out a particular app I am looking for is a bummer. Window 10 introduces [multiple desktops](https://support.microsoft.com/en-us/windows/multiple-desktops-in-windows-36f52e38-5b4a-557b-2ff9-e1a60c976434), which is awesome way to organize desktop by logical grouping. My first desktop will be browser, 2nd desktop will be apps related with work (email, one note, MS Teams) and 3rd one for focus work group (for writing report, serious focus works and music). Toggling around these 3 desktops minimize my “finding Nemo” in the 10 opened apps significantly. 

When I heard about this [Stage Manager](https://support.apple.com/en-us/HT213315) features introduced in MacOS Ventura,  I am happy that this gonna improves organization and productivity. However, after a month pass on with turning on and off and I starts feeling like a tester than a user of this feature. For people who never use this before, this is the brief summary of what Stage Manager does:

1. You can group opened apps into groups by pressing “shift” key and drag and drop. You can do snapping window to resize and still need 3rd party apps like Rectangle to do the job.
2. You can drag apps back to the thumbnail strip at the left side to ungroup.
3. Ctrl-H to hide apps from Stage Manager but still can find at the dock.
4. Ctrl-M to minimize the app to thumbnail strip without moving to another group.

Confused? Go read Apple instructions and which is more or less confusing as what I describes above. You gonna need a bit of trial and error to get a hand-on. In my opinion, Apple should think of a more complete solution than this app grouping. Here is the some of the suggestions as an end-user for the next update of this feature:

1. Snapping 2 or more apps to create group by default (skipping the shift key and dragging one by one)
2. Introduces default key bindings to snap and resize apps (just make [Rectangle](https://www.google.com/search?client=safari&rls=en&q=recentanle+macos&ie=UTF-8&oe=UTF-8) snapping key maps by default)
3. Mission Control should follow the same layouts and grouping of apps as the thumbnails, otherwise it is still a messy user experience and back to “finding Nemo”
4. Option to create app groups in thumbnails into a new window or move to existing window at mission control (This might probably depends with point #3)
5. When Opening a new application, the existing center focused app is minimized immediately instead of grouping. At this point, overlaying apps is more plausible than taking over existing focused app.

This is just purely based on my personal requirement of a user preferring key bindings over drag and drop style. From the people who loves drag-and-drop, most of the points I mention might not be a big issue. Thanks for reading and comment for any  comments you find about MacOS Ventura feature update.