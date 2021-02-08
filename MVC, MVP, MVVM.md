https://www.linkedin.com/pulse/difference-between-mvc-mvp-mvvm-swapneel-salunkhe
https://medium.com/@ankit.sinhal/mvc-mvp-and-mvvm-design-pattern-6e169567bbad

Some basic differences can be written in short:

MVC:

Traditional MVC is where there is a

Model: Acts as the model for data
View : Deals with the view to the user which can be the UI
Controller: Controls the interaction between Model and View, where view calls the controller to update model. View can call multiple controllers if needed.
MVP:

Similar to traditional MVC but Controller is replaced by Presenter. But the Presenter, unlike Controller is responsible for changing the view as well. The view usually does not call the presenter.

MVVM

The difference here is the presence of View Model. It is kind of an implementation of Observer Design Pattern, where changes in the model are represented in the view as well, by the VM. Eg: If a slider is changed, not only the model is updated but the data which may be a text, that is displayed in the view is updated as well. So there is a two-way data binding.