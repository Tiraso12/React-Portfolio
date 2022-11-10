import React from "react";

export default function Contact() {
    return (
        <form>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-5">
                    <input type="email" class="form-control" id="inputEmail3" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Number</label>
                <div class="col-sm-5">
                    <input type="email" class="form-control" id="inputEmail3" />
                </div>
            </div>
            <div class="input-group ">
                <span class="input-group-text">Message</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
    )
}