# Activity 2 - Crime & Punishment

## Misdemeanours Page

Let's see what the design is for this page:

![Misdemeanours](./images/misdemeanours.png 'Sketched misdemeanour page')

Whoa! There's a LOT going on there.

Let's break it down.

## Requirements

The Fakelandians want a browsable list of all misdemeanours. You can decide how to display it - is it a table? A CSS grid? Built from flexbox? All are good options.

There are four columns to show. First, the citizen ID of the person committing the misdemeanour. (Rest assured they keep their data carefully anonymised so these IDs can't be traced back to individuals!)

Then, the date.

Then, the misdemeanour, which they insist is always shown next to an appropriate emoji:

-   Mild Public Rudeness = 🤪
-   Speaking in a Lift = 🗣
-   Not Eating Your Vegetables = 🥗
-   Supporting Manchester United = 😈

Lastly, the "Punishment Idea". Under the Fakelandian system all punishments are random. They find a random picture on the internet and use it as inspiration for the appropriate punishment. Due to the low number of crimes, this weird system supposedly works extremely well.

## Let's build it!

First, notice the highlight on the Misdemeanours link on the navbar. That looks like a good idea - we should highlight the NavLink for the page we're on!

According to the [React Router docs](https://reactrouter.com/docs/en/v6/api#navlink):

By default, an `active` class is added to a `<NavLink>` component when it is active.

👉 Add some CSS rules to style the links when the `active` class is added.

(Optionally you can use the following, more complicated, setup to pass a `styleObject` e.g. `{{ color: red}}`)

```TSX
        <NavLink
            to="someRoute"
            style={({ isActive }) =>
              isActive ? someActiveStyleObject : someOtherStyleObject
            }
          >
```

## Getting Misdemeanours

The Fakelandians have provided an API for you to call to get a list of misdemeanours in the [generate misdemeanours.ts](./generate_misdemeanours.ts) file. We'll use this to get the IDs, dates and misdemeanours.

They've also provided a custom type of `Misdemeanour` for you - a custom type which can be only one of four possible values, corresponding to the four possible Misdemeanours under Fakelandian law.

You can import the `generateMisdemeanours` async function and call it like it's an external API.

👉 When the application first loads, use hooks to call `generateMisdemeanours` and store the results in some state.

❗ The function is asyncronous so be sure to `await` the results.

❗ If you're doing this correctly you should be able to navigate between different pages without changing this state - it should be constant until you hit F5 to refresh the page when it calls `generateMisdemeanours` again. Call it only once on application load!)

👉 Make this state accessible via `useContext` so you can consume it in sub-components you will write next

👉 Add sub-components to the Misdemeanours page to render all of the misdemeanours in a list

👉 Add a dropdown to the Misdemeanours column that filters the visible list to just one of the four misdemeanours.

❗ This filter shouldn't update the list stored in state - just the list being rendered on this page, so you might need to separate out those two concepts somehow.

## Punishment Ideas

The Fakelandian system for getting random punishment inspiration is to use a service called `Picsum`, which can be accessed simply by putting a particular URL into an image tag:

```HTML
<img src='https://picsum.photos/{width}/{height}' />;
```

👉 Use the Picsum service to add random pictures to each misdemeanour, setting `width` and `height` in the URL.

👉 Remember to **commit** your code often!

Now let's move on to [activity 3](./activity_3.md) where we'll help people confess to some misdemeanours.
