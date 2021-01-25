<div style={{ 'position': 'relative', 'overflowY': 'auto', 'height': '60vh', 'display': 'block' }}>
        <ToastContainer/>
        <div>
          <div style={{ textAlign: "center", fontFamily: "monospace" }}>
            <h1> Create Your Cv </h1>
          </div>
         
          <Form id="form">
          
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Enter your Full Name"
                value={this.state.name} onChange={this.nameChangeHandler} />
              <div style={{color:"red"}}>{this.state.nameError}</div>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your Email"
                value={this.state.email} onChange={this.emailChangeHandler} />
              <div style={{color:"red"}}>{this.state.emailError}</div>
            </FormGroup>
            <FormGroup>
              <Label for="number">Phone Number</Label>
              <Input type="number" name="number" id="number" placeholder="Enter your Phone number"
                value={this.state.number} onChange={this.numberChangeHandler} />
              <div style={{color:"red"}} >{this.state.numberError}</div>
              <div style={{color:"red"}} >{this.state.numberLengthError}</div>
            </FormGroup>

            <FormGroup>
              <Label for="qual">Qualification</Label>
              <Input type="text" name="qual" id="qual" placeholder="Enter your Qualification"
                value={this.state.qual} onChange={this.qualChangeHandler} />

              <div style={{color:"red"}}>{this.state.qualError}</div>
            </FormGroup>
            <FormGroup>
              <Label for="exp">Experience</Label>
              <Input type="text" name="exp" id="exp" placeholder="Enter your experience"
                value={this.state.exp} onChange={this.expChangeHandler} />
              <div style={{color:"red"}}>{this.state.expError}</div>
            </FormGroup>

            <FormGroup>
              <Label for="skill">Skills</Label>
              <Input type="text" name="text" id="exampleText" placeholder="Enter your technical skills"
                value={this.state.skill} onChange={this.skillChangeHandler}/>
              <div style={{color:"red"}}>{this.state.skillError}</div>
            </FormGroup>


            <Button type="submit" color="primary" onClick={this.save}>Submit</Button>
            <ToastContainer />

          </Form>
        </div>

      </div>