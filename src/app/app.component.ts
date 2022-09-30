import { Component, VERSION } from "@angular/core";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public content = `<h1><p>This is formatted message</p></h1> <p style="text-align: center;">My <strong>Bold </strong>centered aligned <span style="background-color: #fce5d4; color: #c45a11;">colorful</span><span style="color: #c45a11;"> </span>text</p> <p><em>Italic</em></p> <p><span style="text-decoration-line: underline;">Underlined</span></p> <p><span style="font-size: 10pt;">With image</span></p>
  <p>with very long content</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor. Vulputate dignissim suspendisse in est ante in nibh mauris. Morbi tempus iaculis urna id volutpat lacus. Ultrices neque ornare aenean euismod elementum nisi quis. Maecenas ultricies mi eget mauris pharetra et. </p>
  
   <p>Message Signature <br />`;

  public get safeHtmlContent(): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(this.content);
  }

  constructor(private domSanitizer: DomSanitizer) {}
}
